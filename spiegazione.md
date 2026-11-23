DOM -> Document Object Model -> Modello a Oggetto del Documento
Qualsiasi elemento HTMl mi vado a prendere dalle pagine html e lo porto in JS per manipolarlo, diventerà un OGGETTO

anche il nostro Document è un oggetto con coppie chiave-valore

-querySelector() -> è un metodo di document che mi permette di catturare un elemento html, indicando nelle tonde il selettore CSS per catturarlo. 
nelle tonde, il selettore va indicato con gli apicetti '', quindi sottoforma di stringa
selettori CSS -> tag, class, id

.addEventListener() -> ascoltatore di eventi. Rimane in attesa finché l'utente non fa partire esattamente quell'evento nel browser, che indico io nell'addEventListener. l'evento va sottoforma di stringa.
Dopo l'evento, si fa partire una funzione e nel blocco di dichiarazioni di quella funzione indico che cosa deve succedere

.querySelectorAll() -> è un metodo di document che mi permette di catturare più elementi HTML, indicando nelle tonde il selettore CSS per catturarli.
nelle tonde, il selettore va indicato sottoforma di stringa

Quando catturiamo gli elementi html col querySelectorAll, lui li mette in una NodeList, nonché un Array-like
Gli arraylike non hanno accesso ai metodi degli array (per ora.. spoiler)
gli array like possono solo utilizzare il metodo .forEach()

.innerText -> mi permette di modificare il testo di un elemento HTML
.innerHTML -> mi permette di modificare IL CONTENUTO DI UN TAG HTML


.createElement() -> metodo di document che mi permette di creare tag html. nelle tonde, indico il tag sottoforma di stringa, ad esempio 'li'


SCALETTA PER LA CREAZIONE DI ELEMENTI NEL DOM:

- creare un nuovo tag
- riempire il tag con qualcosa (contenuto)
- appendere il tag al contenitore padre

per appendere il figlio al padre, si usa il metodo .appendChild()