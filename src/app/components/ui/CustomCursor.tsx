import { useEffect, useRef, useCallback, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  shape: "circle" | "square" | "triangle" | "diamond" | "ring";
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
}

interface TrailDot {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  size: number;
}

interface RippleRing {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  life: number;
  maxLife: number;
  lineWidth: number;
}

const COLORS = ["#0F0F0F", "#333333", "#525252", "#737373", "#A3A3A3"];
const SHAPES: Particle["shape"][] = ["circle", "square", "triangle", "diamond", "ring"];

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef({ x: -100, y: -100 });
  const outerRef = useRef({ x: -100, y: -100 });
  const outerSizeRef = useRef(22);
  const particlesRef = useRef<Particle[]>([]);
  const trailRef = useRef<TrailDot[]>([]);
  const ripplesRef = useRef<RippleRing[]>([]);
  const isHoveringRef = useRef(false);
  const isClickingRef = useRef(false);
  const comboRef = useRef(0);
  const comboTimerRef = useRef<number>(0);
  const lastClickTimeRef = useRef(0);
  const frameRef = useRef(0);
  const dprRef = useRef(1);
  const [combo, setCombo] = useState(0);
  const [showCombo, setShowCombo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const spawnParticles = useCallback((x: number, y: number, count: number, intensity: number) => {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 1.5 + Math.random() * 3 * intensity;
      const life = 30 + Math.random() * 30;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life,
        maxLife: life,
        size: 2 + Math.random() * 4 * intensity,
        shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.15,
        opacity: 1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
  }, []);

  const spawnRipple = useCallback((x: number, y: number, intensity: number) => {
    const life = 40 + intensity * 10;
    ripplesRef.current.push({
      x,
      y,
      radius: 8,
      maxRadius: 45 + intensity * 15,
      life,
      maxLife: life,
      lineWidth: 2 + intensity * 0.3,
    });
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    dprRef.current = dpr;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Hide default cursor
    document.body.style.cursor = "none";
    const styleEl = document.createElement("style");
    styleEl.textContent = `*, *::before, *::after { cursor: none !important; }`;
    document.head.appendChild(styleEl);

    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };

      // Trail dots every 3rd frame
      if (frameRef.current % 3 === 0) {
        const life = 18;
        trailRef.current.push({
          x: e.clientX,
          y: e.clientY,
          life,
          maxLife: life,
          size: 3,
        });
        if (trailRef.current.length > 25) {
          trailRef.current.shift();
        }
      }
    };

    const handleMouseDown = () => {
      isClickingRef.current = true;
      const now = Date.now();
      const { x, y } = cursorRef.current;

      // Combo system
      if (now - lastClickTimeRef.current < 800) {
        comboRef.current++;
      } else {
        comboRef.current = 1;
      }
      lastClickTimeRef.current = now;
      setCombo(comboRef.current);
      setShowCombo(true);

      clearTimeout(comboTimerRef.current);
      comboTimerRef.current = window.setTimeout(() => {
        comboRef.current = 0;
        setCombo(0);
        setShowCombo(false);
      }, 1200);

      const intensity = Math.min(comboRef.current, 6);
      const particleCount = 6 + intensity * 3;

      spawnParticles(x, y, particleCount, intensity * 0.5);
      spawnRipple(x, y, intensity);

      if (comboRef.current >= 3) {
        setTimeout(() => spawnRipple(x, y, intensity * 0.7), 80);
      }
      if (comboRef.current >= 5) {
        setTimeout(() => spawnRipple(x, y, intensity * 0.5), 160);
      }
    };

    const handleMouseUp = () => {
      isClickingRef.current = false;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], [data-clickable], input, textarea, select"
      );
      isHoveringRef.current = !!interactive;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    const drawShape = (ctx: CanvasRenderingContext2D, p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity * (p.life / p.maxLife);

      switch (p.shape) {
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
          break;
        case "square":
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size, -p.size, p.size * 2, p.size * 2);
          break;
        case "triangle": {
          ctx.beginPath();
          const s = p.size * 1.2;
          ctx.moveTo(0, -s);
          ctx.lineTo(s, s);
          ctx.lineTo(-s, s);
          ctx.closePath();
          ctx.fillStyle = p.color;
          ctx.fill();
          break;
        }
        case "diamond":
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 1.3);
          ctx.lineTo(p.size, 0);
          ctx.lineTo(0, p.size * 1.3);
          ctx.lineTo(-p.size, 0);
          ctx.closePath();
          ctx.fillStyle = p.color;
          ctx.fill();
          break;
        case "ring":
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.2;
          ctx.stroke();
          break;
      }
      ctx.restore();
    };

    let animId: number;

    const animate = () => {
      frameRef.current++;
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      const mx = cursorRef.current.x;
      const my = cursorRef.current.y;
      const isHovering = isHoveringRef.current;
      const isClicking = isClickingRef.current;

      // --- Outer ring follows with snappy delay ---
      const outerLerp = 0.2;
      outerRef.current.x += (mx - outerRef.current.x) * outerLerp;
      outerRef.current.y += (my - outerRef.current.y) * outerLerp;

      // Animate outer ring size smoothly
      const targetSize = isHovering ? 30 : isClicking ? 16 : 22;
      outerSizeRef.current += (targetSize - outerSizeRef.current) * 0.15;
      const outerSize = outerSizeRef.current;

      // --- Trail dots ---
      for (let i = trailRef.current.length - 1; i >= 0; i--) {
        const dot = trailRef.current[i];
        dot.life--;
        if (dot.life <= 0) {
          trailRef.current.splice(i, 1);
          continue;
        }
        const t = dot.life / dot.maxLife;
        const alpha = t * 0.25;
        const shrink = t * dot.size;

        // White outline for visibility
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, shrink + 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.5})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, shrink, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15, 15, 15, ${alpha})`;
        ctx.fill();
      }

      // --- Ripple rings ---
      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const r = ripplesRef.current[i];
        r.life--;
        if (r.life <= 0) {
          ripplesRef.current.splice(i, 1);
          continue;
        }
        const progress = 1 - r.life / r.maxLife;
        const eased = 1 - Math.pow(1 - progress, 3);
        const radius = r.radius + (r.maxRadius - r.radius) * eased;
        const alpha = (r.life / r.maxLife) * 0.4;

        ctx.beginPath();
        ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(15, 15, 15, ${alpha})`;
        ctx.lineWidth = r.lineWidth * (r.life / r.maxLife);
        ctx.stroke();
      }

      // --- Particles ---
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.vy += 0.03;
        p.rotation += p.rotationSpeed;
        p.life--;
        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }
        drawShape(ctx, p);
      }

      // --- Outer ring with white backing for visibility ---
      const ox = outerRef.current.x;
      const oy = outerRef.current.y;

      // White halo behind ring
      ctx.beginPath();
      ctx.arc(ox, oy, outerSize, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
      ctx.lineWidth = isHovering ? 4 : 3;
      ctx.stroke();

      // Dark ring
      ctx.beginPath();
      ctx.arc(ox, oy, outerSize, 0, Math.PI * 2);
      ctx.strokeStyle = isHovering
        ? "rgba(15, 15, 15, 0.5)"
        : "rgba(15, 15, 15, 0.3)";
      ctx.lineWidth = isHovering ? 2 : 1.5;
      ctx.stroke();

      // Decorative corner marks when hovering
      if (isHovering) {
        ctx.save();
        ctx.strokeStyle = "rgba(15, 15, 15, 0.25)";
        ctx.lineWidth = 1.5;
        const markLen = 8;
        const offset = outerSize + 4;

        // top-left
        ctx.beginPath();
        ctx.moveTo(ox - offset, oy - offset + markLen);
        ctx.lineTo(ox - offset, oy - offset);
        ctx.lineTo(ox - offset + markLen, oy - offset);
        ctx.stroke();

        // top-right
        ctx.beginPath();
        ctx.moveTo(ox + offset - markLen, oy - offset);
        ctx.lineTo(ox + offset, oy - offset);
        ctx.lineTo(ox + offset, oy - offset + markLen);
        ctx.stroke();

        // bottom-right
        ctx.beginPath();
        ctx.moveTo(ox + offset, oy + offset - markLen);
        ctx.lineTo(ox + offset, oy + offset);
        ctx.lineTo(ox + offset - markLen, oy + offset);
        ctx.stroke();

        // bottom-left
        ctx.beginPath();
        ctx.moveTo(ox - offset + markLen, oy + offset);
        ctx.lineTo(ox - offset, oy + offset);
        ctx.lineTo(ox - offset, oy + offset - markLen);
        ctx.stroke();

        ctx.restore();
      }

      // --- Inner dot — snaps 1:1 to mouse position ---
      const dotSize = isClicking ? 4 : isHovering ? 5 : 5;

      // White halo behind dot for visibility on dark backgrounds
      ctx.beginPath();
      ctx.arc(mx, my, dotSize + 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.fill();

      // Dark dot
      ctx.beginPath();
      ctx.arc(mx, my, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = "#0F0F0F";
      ctx.fill();

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", resize);
      document.body.style.cursor = "";
      styleEl.remove();
      clearTimeout(comboTimerRef.current);
    };
  }, [isMobile, spawnParticles, spawnRipple]);

  if (isMobile) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-[9999] pointer-events-none"
      />

      {/* Combo indicator */}
      {showCombo && combo >= 2 && (
        <div
          className="fixed z-[9999] pointer-events-none select-none"
          style={{
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-[8px] bg-[#0F0F0F] text-white"
            style={{
              animation: "comboPopIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <span className="text-[11px] tracking-[0.15em] uppercase opacity-60">
              Combo
            </span>
            <span
              className="text-[18px] font-[600] tabular-nums"
              style={{ animation: "comboPulse 0.2s ease-out" }}
              key={combo}
            >
              x{combo}
            </span>
            {combo >= 5 && (
              <span className="text-[10px] tracking-[0.1em] uppercase opacity-50 ml-1">
                {combo >= 10
                  ? "LEGENDARY"
                  : combo >= 7
                  ? "UNSTOPPABLE"
                  : "ON FIRE"}
              </span>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes comboPopIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes comboPulse {
          0% { transform: scale(1.4); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
}
