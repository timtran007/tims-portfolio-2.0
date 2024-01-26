"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(() => {
    return import("react-animated-numbers")
}, {ssr: false}
)

export default function AchievementsSection() {
    const achievements = [
        {
            metric: 'Hours of Code',
            value: '2500',
            postfix: "+",
        },
        {
            prefix: "~",
            metric: 'Languages',
            value: '3',
        },
        {
            prefix: "~",
            metric: 'Frameworks',
            value: '4',
        },
        {
            metric: 'Years',
            value: '1',
            postfix: "+",
        },
    ]
  return (
    <div
        className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
    >
        <div className="border-[#33353F] border rounded-md py-8 px-12 flex flex-wrap flex-row items-center justify-center sm:justify-between dark:shadow-[#1A1A1A] shadow-md">
            {achievements.map(achievement => {
                return(
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
                                    }
                                }}
                            />
                            {achievement.postfix}
                        </h2>
                        <p className="text-base">{achievement.metric}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
