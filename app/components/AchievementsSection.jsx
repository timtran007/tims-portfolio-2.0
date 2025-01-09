"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useEffect } from "react";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

export default function AchievementsSection() {
  const [hoursOfCode, setHoursOfCode] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  useEffect(() => {
    const calculateWeekdays = (startDate, endDate) => {
      let count = 1400;
      let currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          // Exclude Sundays (0) and Saturdays (6)
          count++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return count;
    };

    const calculateHoursOfCode = () => {
      const startDate = new Date("2023-06-12");
      const endDate = new Date();
      const weekdays = calculateWeekdays(startDate, endDate);
      const hoursPerDay = 8;
      return weekdays * hoursPerDay;
    };

    const calculateYearsOfExperience = () => {
      const startDate = new Date("2022-09-15");
      const endDate = new Date();
      const diffTime = Math.abs(endDate - startDate);
      const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);
      return Math.round(diffYears);
    };

    setHoursOfCode(calculateHoursOfCode());
    setYearsOfExperience(calculateYearsOfExperience());
  }, []);
  const achievements = [
    {
      metric: "Hours of Code",
      value: hoursOfCode,
      postfix: "+",
    },
    {
      prefix: "~",
      metric: "Languages",
      value: "3",
    },
    {
      prefix: "~",
      metric: "Frameworks",
      value: "4",
    },
    {
      metric: "Years",
      value: yearsOfExperience,
      postfix: "+",
    },
  ];
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-12 flex flex-wrap flex-row items-center justify-center sm:justify-between dark:shadow-[#1A1A1A] shadow-md">
        {achievements.map((achievement) => {
          return (
            <div
              key={achievement.metric}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 1000,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
