import axios from 'axios';
import castlesky from '../assets/images/laputa.jpg';
import graveofireflies from '../assets/images/hotarunohaka.jpg';
import totoro from '../assets/images/totoro.jpg';
import kiki from '../assets/images/majo.jpg';
import yesterday from '../assets/images/omoide.jpg';
import porco from '../assets/images/porco.jpg';
import pompoko from '../assets/images/tanuki.jpg';
import whisperofheart from '../assets/images/mimi.jpg';
import mononoke from '../assets/images/mononoke.jpg';
import yamada from '../assets/images/yamada.jpg';
import chihiro from '../assets/images/chihiro.jpg';
import thecatreturns from '../assets/images/baron.jpg';
import howl from '../assets/images/howl.jpg';
import talesearthsea from '../assets/images/ged.jpg';
import ponyo from '../assets/images/ponyo.jpg';
import arriety from '../assets/images/karigurashi.jpg';
import uponpoppyhill from '../assets/images/kokurikozaka.jpg';
import windrises from '../assets/images/kazetachinu.jpg';
import kaguya from '../assets/images/kaguyahime.jpg';
import marnie from '../assets/images/marnie.jpg';
import redturtle from '../assets/images/red-turtle.jpg';

type ImagesProps = {
    ghibliImages: string
}

export const api = axios.create({
    baseURL: "https://ghibliapi.herokuapp.com/"
})

export const ghibliImages: any = {
    "Castle in the Sky": castlesky,
    "Grave of the Fireflies": graveofireflies,
    "My Neighbor Totoro": totoro,
    "Kiki's Delivery Service": kiki,
    "Only Yesterday": yesterday,
    "Porco Rosso": porco,
    "Pom Poko": pompoko,
    "Whisper of the Heart": whisperofheart,
    "Princess Mononoke": mononoke,
    "My Neighbors the Yamadas": yamada,
    "Spirited Away": chihiro,
    "The Cat Returns": thecatreturns,
    "Howl's Moving Castle": howl,
    "Tales from Earthsea": talesearthsea,
    "Ponyo": ponyo,
    "Arrietty": arriety,
    "From Up on Poppy Hill": uponpoppyhill,
    "The Wind Rises": windrises,
    "The Tale of the Princess Kaguya": kaguya,
    "When Marnie Was There": marnie,
    "The Red Turtle": redturtle,
}
