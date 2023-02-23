import React from "react"
import Cube from "./Cube"

export default function Game() {
    const [cubes, setCubes] = React.useState(Array(10).fill({
        id: 1,
        val: 1,
        isClicked: false
    }).map((cube, num) => ({...cube, val: Math.floor(Math.random()*6+1), id: num, key:num})))
    
    function shuffle() {
        setCubes(prevCubes => {
            return prevCubes.map(cube => cube.isClicked?cube:{...cube, val: Math.floor(Math.random()*6+1)})
        })
    }

    function handleClick(clickId) {
        setCubes(prevCubes => {
            let newCubes = [...prevCubes]
            newCubes[clickId].isClicked = !newCubes[clickId].isClicked
            return newCubes
        })
    }
    function allClicked() {
        let statement = true
        cubes.forEach(cube => {
            if(cube.val !== cubes[0].val || !cube.isClicked) statement=false
        })
        return statement
    }

    return (
        <div className="gameContent">
            {cubes.map(cube => <Cube {...cube} handleClick={handleClick} />)}
            <button onClick={allClicked()?()=>{window.location.reload(false)}:shuffle}>{allClicked()?"Play Again":"Roll"}</button>
        </div>
    )

}