import CartProduct from './CardProduct';
import Section, { SectionBody, SectionNote, SectionTitle } from './Section';

function RecentGame(props) {
    const data = props.data;
    return (
        <Section>
            <SectionTitle>RECENT GAMES</SectionTitle>
            <SectionNote>RECENT GAMES FROM TOP DEVELOPERS</SectionNote>
            <SectionBody>
                <div style={{ gap: '30px' }} className="grid col-4 col-md-2 col-flex-center">
                    {data.map((item, index) => {
                        return <CartProduct key={index} data={item} margin />;
                    })}
                </div>
            </SectionBody>
        </Section>
    );
}

export default RecentGame;
