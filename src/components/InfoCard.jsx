import React from 'react'

const isIncome = Math.round(Math.random())

const InfoCard = () => {
    return (
        <div style={{ textAlign:'center' , padding:'0 10%'}}>
            Say : <br/> 
            Add { isIncome ? 'Income ' : 'Expense '} income
             for Rs{ isIncome ? '500 ' : '1000 '} 
             in category business
              for today.
        </div>
    )
}

export default InfoCard
