//   *********  Props in react   ******* ///

/*  

  what are props ?

  In React, "props" is short for "properties," and it refers to a mechanism for passing data from one component to another.

  1.Props allow you to pass information (data) from a parent component to a child component in a unidirectional flow.
  2. used to make your components dynamic and reusable.

  Props are a fundamental building block in React, allowing you to create dynamic and reusable components that can interact with each other

 */

  function Propss(props) {

    return (
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    )
  }

  export default Propss;