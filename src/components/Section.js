function Section(props) {
    return <div className="section">{props.children}</div>;
}

export const SectionTitle = (props) => {
    return <div className="section__title">{props.children}</div>;
};

export const SectionNote = (props) => {
    return <div className="section__note">{props.children}</div>;
};

export const SectionBody = (props) => {
    return <div className="section__body">{props.children}</div>;
};

export default Section;
