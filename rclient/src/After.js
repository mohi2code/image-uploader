export default function After({URL, image}) {
    function copy() {
        var tempInput = document.createElement("input");
        tempInput.value = `${URL}/${image.name}`;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        document.execCommand('copy', true, `${URL}/${image.name}`);
    }

    return (
        <main>
            <section className="upload-wrap">
                <div className="after">
                    <img src="tick.svg" style={{width: '35px'}}/>
                    <h3 style={{marginTop: '36px'}}>Uploaded Successfully !</h3>
                    <img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={`${URL}/${image.name}`}/>
                    <button onClick={copy} style={{marginTop: '20px'}}>Copy Link</button>
                </div>
            </section>
        </main>
    );
}