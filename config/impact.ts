export type ImpactMetric = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
  trend?: number[];
  illustration?: "code";
};

export const reportGenerationImpact = {
  label: "Report Generation Speed",
  beforeValue: 5,
  beforeSuffix: " hours",
  afterValue: 3,
  afterSuffix: " sec",
  description:
    "Automated Excel-heavy actuarial reporting, reducing generation time from 5 hours to 3 seconds",
  trend: [300, 180, 72, 18, 5, 3, 3],
};

export const impactMetrics: ImpactMetric[] = [
  {
    label: "Test Coverage",
    value: 94,
    suffix: "%",
    description:
      "pytest regression coverage for financial calculation, reporting, and transformation logic.",
    trend: [72, 76, 81, 84, 88, 94],
  },
  {
    label: "Automation Scripts",
    value: 50,
    suffix: "+",
    description:
      "Reusable Python workflows for reporting, validation, file processing, and data transformation.",
    illustration: "code",
  },
];
