export default function After({URL, image}) {
    return (
        <main>
            <section className="upload-wrap">
                <div className="after">
                    <img src="tick.svg" style={{width: '35px'}}/>
                    <h3 style={{marginTop: '36px'}}>Uploaded Successfully !</h3>
                    <img style={{width: '100%', height: '100%', objectFit: 'contain'}} src={`${URL}/${image.name}`}/>
                </div>
            </section>
        </main>
    );
}