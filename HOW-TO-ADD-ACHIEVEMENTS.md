# How to Add Your Achievements

## Location

Edit this file: `src/app/data/achievements.ts`

## Achievement Structure

Each achievement has these fields:

```typescript
{
  id: string;              // Unique ID (e.g., "1", "2", "achievement-001")
  title: string;           // Achievement name
  organization: string;    // Who gave the achievement
  date: string;           // When you received it (e.g., "March 2024", "2023-2024")
  location?: string;      // Optional - Where (e.g., "Manila, Philippines")
  description: string;    // What you achieved and why it matters
  category: "award" | "certification" | "competition" | "recognition";
}
```

## Categories

Choose one of these categories:

| Category | Icon | Color | Best For |
|----------|------|-------|----------|
| `award` | 🏆 Trophy | Blue | Competition wins, best project awards |
| `certification` | 🎓 Award | Green | Certifications, course completions |
| `competition` | ⭐ Star | Orange | Hackathon placements, contests |
| `recognition` | 💼 Briefcase | Red | Dean's list, scholarships, honors |

## Example Achievement

```typescript
{
  id: "6",
  title: "React Developer Certification",
  organization: "Meta (Facebook)",
  date: "February 2024",
  description: "Completed advanced React training covering hooks, context, performance optimization, and modern React patterns.",
  category: "certification",
}
```

## How to Add

1. Open `src/app/data/achievements.ts`
2. Add a new object to the `achievements` array
3. Save the file
4. Your achievement will automatically appear on the Achievements page!

## Tips

- **Title**: Keep it clear and specific
- **Organization**: Include the full, official name
- **Date**: Use readable format like "March 2024" or "2023-2024"
- **Description**: Explain what you did, why it matters, and the impact
- **Location**: Optional but adds context for in-person events
- **Category**: Choose the most fitting category

## Sorting

Achievements display in the order you list them. Put most recent or important ones first!

---

**Your achievements will automatically sync with the portfolio design system.** ✅
