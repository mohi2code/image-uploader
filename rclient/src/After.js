import { useHistory } from 'react-router-dom'

export default function After({URL, image}) {
    const history = useHistory();

    function copy() {
        var tempInput = document.createElement("input");
        tempInput.value = `${URL}/images/${image.name}`;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        // document.execCommand('copy', true, );
    }

    return (
        <main>
            <section className="upload-wrap">
                <div className="after">
                    <img src="tick.svg" style={{width: '35px'}}/>
                    <h3 style={{marginTop: '36px'}}>Uploaded Successfully !</h3>
                    <img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={`${URL}/images/${image.name}`}/>
                    <button onClick={copy} style={{marginTop: '20px'}}>Copy Link</button>
                    <button style={{marginTop: '10px'}} onClick={(e) => history.push('/')}>Add another Image</button>
                </div>
            </section>
        </main>
    );
}