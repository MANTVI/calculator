customRender=(reactElement,domAdd)=>{
      const domElement=document.createElement(reactElement.type)
      domElement.innerHTML=reactElement.childern
      for (const i in reactElement.props){
                domElement.setAttribute(i,reactElement.props[i])
      }
    domAdd.appendChild(domElement)
} 
const reactElement={
    type:'a',
    props: {
        href:"https://google.com",
        target:"_blank"
    },
    childern:" chick me to vist google"
}
const domAdd=document.getElementById("root")

customRender(reactElement,domAdd)
