import Dices from './Dices'
//import ResultText from '../../src/components/ResultText'

const FrontPage = () => {
    return (
        <div style={{
            backgroundColor: '#FFFFFFF',
            width: 700,
            height: 400,
            borderRadius: 7,
            marginLeft: 300,
            marginTop: 50,
            border: 1,
            borderStyle: "solid",
            borderColor: "#9B8787"
        }}>
            <header style={{
                width: 700,
                height: 60,
                borderTopLeftRadius: 7,
                borderTopRightRadius: 7,
                borderBottom: 1,
                borderTop: 0,
                borderRight: 0,
                borderLeft: 0,
                borderStyle: "solid",
                borderColor: "#9B8787",
                display: "flex",
                alignItems: "center",
            }}>
                <p style={{
                    marginLeft: 15
                }}>
                    Jogue os Dados
                </p>
            </header>

            <section style={{
                width: 700,
                height: 275,
            }}>
                <Dices />
            </section>
            
            <footer style={{
                width: 700,
                height: 65,
                borderBottom: 0,
                borderTop: 1,
                borderRight: 0,
                borderLeft: 0,
                borderStyle: "solid",
                borderColor: "#9B8787"
            }}>
                
            </footer>
        </div>
    );
}

export default FrontPage;