const Sparkles = () => {
    const sparkles = Array.from({ length: 30 });
    return (
        <div className="sparkle-container">
            {sparkles.map((_, i) => (
                <div
                    key={i}
                    className="sparkle"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
        </div>
    );
};

export { Sparkles }
