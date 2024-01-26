import React from 'react'

export default function AchievementsSection() {
    const achievements = [
        {
            metric: 'Hours of Code',
            value: '2.5K+',
        },
        {
            metric: 'Languages',
            value: '2 to 3',
        },
        {
            metric: 'Frameworks',
            value: '3 to 4',
        },
        {
            metric: 'YoE',
            value: '1+',
        },
    ]
  return (
    <div
        className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
    >
        <div className="border-[#33353F] border rounded-md py-8 px-12 flex flex-row items-center justify-between dark:shadow-[#1A1A1A] shadow-md">
            {achievements.map(achievement => {
                return(
                    <div
                        key={achievement.metric}
                        className="flex flex-col items-center justify-center mx-4"
                    >
                        <h2 className="text-4xl font-bold">{achievement.value}</h2>
                        <p className="text-base">{achievement.metric}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
