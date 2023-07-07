import qrImage from './assets/image-qr-code.png';
import './QRCode.css'



export default function QRcode() {
    return (
        <>
            <main>

                <article className="card">

                    <img src={qrImage} alt="QR-code" className="qr-image" />

                    <h2> Improve your front-end skills by building projects </h2>
        

                    <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level </p>

                </article>

          

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
                Coded by <a href="https://nathanturkson.netlify.app/" target="_blank" rel="noreferrer">Nathan Turkson</a>.
                </div>
                
            </main>
        </>
    )
}