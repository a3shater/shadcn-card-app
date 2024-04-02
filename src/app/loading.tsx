import SkeletonCard from "@/components/SkeletonCard";

export default function loading() {
    return (
        <main className="max-w-6xl mx-auto my-16">
            <div className="grid grid-cols-3 gap-8">
                {"abcdefghi".split('').map((i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        </main>
    )
}