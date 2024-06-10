interface IntroSectionProps {
    title: string
}

const IntroSection = ({ title }: IntroSectionProps) => {
    return (
        <span className="text-sm font-normal text-emerald-400">../{title}</span>
    )
}