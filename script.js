const scripts = {

	redireccionInterna ( path ) {
		const host = window.location.host;
		const hostname = window.location.hostname;
		console.log( { host, hostname } )
		if ( hostname === 'localhost' || hostname === '127.0.0.1' ) {
				window.location.assign( `http://${host}${path}.html` );
		}
		else {
				const midPath = '/copagocero'
				window.location.assign( `https://${host}${midPath}${path}` );
		}
}
}
