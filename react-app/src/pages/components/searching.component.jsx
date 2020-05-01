import React from 'react'
import {getValues,Palindrome} from './searching.utils'
class Searching extends React.Component{
    constructor(){
        super()
        this.state={
            input:''
        }
    }

    handleChange = (event)=>{
        const {name,value}=event.target
        this.setState({[name]:value},
                                    ()=>{
                                        if(this.state.input.length>1){if(Palindrome(this.state.input))
                                        {
                                            alert('Magic word found!')
                                        }}
                                        })
    }
    render()
    {
        return(<div><form><input name="input" value={this.state.input} onChange={this.handleChange}/></form>{this.state.input?getValues(this.state.input).map(elem=><div key={Math.random()}>{elem}</div>):null}</div>)
    }
}
export default Searching