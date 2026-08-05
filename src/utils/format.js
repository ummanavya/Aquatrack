// src/utils/format.js

/**
 * Formats a numeric value for display, rounding to a fixed
 * number of decimal places and stripping trailing zeros/
 * floating-point artifacts (e.g. 5.780000000000001 -> 5.78).
 */
export function formatNumber(value, decimals = 2) {
  if (value === null || value === undefined || isNaN(value)) {
    return "0";
  }

  const num = Number(value);
  const rounded = Number(num.toFixed(decimals));

  // Removes unnecessary trailing zeros (e.g. 5.00 -> 5, 5.50 -> 5.5)
  return rounded % 1 === 0 ? rounded.toString() : rounded.toString();
}

/**
 * Formats a date string into a short, human-readable form.
 * e.g. "2026-07-08" -> "8 Jul 2026"
 * Falls back to the raw string if parsing fails.
 */
export function formatDate(value) {
  if (!value) return "-";

  const date = new Date(value);

  if (isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * Formats a date + time for alerts/activity feeds.
 * e.g. "2026-07-16T00:28:08.756283" -> "16 Jul 2026, 12:28 AM"
 */
export function formatDateTime(value) {
  if (!value) return "Recently";

  const date = new Date(value);

  if (isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

/**
 * Normalizes a household identifier so the House column
 * doesn't mix formats like "1", "2", "H-101" inconsistently.
 * Displays plain numeric IDs with a "H-" prefix so every row
 * follows the same pattern.
 */
export function formatHouseId(value) {
  if (!value) return "-";

  const str = String(value).trim();

  // Already has a prefix like "H-101"
  if (/^[A-Za-z]/.test(str)) {
    return str;
  }

  return `H-${str}`;
}