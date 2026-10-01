import "./sectionTitle.css";

function SectionTitle({
    eyebrow,
    title,
    description,
    align = "center"
}) {
    return (
        <div className={`section-title ${align}`}>

            {eyebrow && (
                <span className="section-eyebrow">
                    {eyebrow}
                </span>
            )}

            <h2>
                {title}
            </h2>

            {description && (
                <p>
                    {description}
                </p>
            )}

        </div>
    );
}

export default SectionTitle;