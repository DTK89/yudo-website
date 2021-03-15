import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
:root {
  /* primary/main color */
  --clr-primary: hsl(345, 100%, 44%);
  /* secondary/alt color */
  --clr-secondary: hsl(0, 0%, 98%);
  /*trinary/accent color*/
  --clr-trinary: hsl(193, 31%, 94%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  
  --clr-white: hsl(0, 0%, 100%);;
  --clr-black: hsl(0, 0%, 20%);;
  
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.4rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}
html {
  font-size: 62.5%;
  border: 0;
}
  
body {
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
  background-color: var(--clr-primary);
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  font-size: 1.4rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
}
h1,
h2,
h3,
h4,
h5 {
  letter-spacing: var(--spacing);
  /* text-transform: capitalize; */
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
h1 {
  font-size: 3.6rem;
}
h2 {
  font-size: 3rem;
}
h3 {
  font-size: 2.4rem;
}
h4 {
  font-size: 1.8rem;
}
h5 {
  font-size: 1.6rem;
}
p {
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 1rem;
  /* color: var(--clr-black); */
}
`;

export default GlobalStyle;
