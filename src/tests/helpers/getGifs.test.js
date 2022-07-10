import getGif from "../../helpers/getGifs";

describe( 'Pruebas sobre el "helper" getGifs', () => {
    test( 'La función debe traer 10 elementos', async () => {
        let imgs = await getGif( 'naruto' );
        expect( imgs.length ).toBe( 10 );        
    } );

    test( 'La función debe regresar un arreglo vacio cuando no se le manda una cadena vacia como argumento', async () => {
        let imgs = await getGif( '' );
        expect( imgs.length ).toBe( 0 );
        
    } )
} )