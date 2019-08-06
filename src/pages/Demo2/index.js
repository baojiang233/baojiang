import React, { Fragment, PureComponent } from 'react';
import { Card, Button,BackTop,Icon,Input} from 'antd';

export default class Demo2 extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            cardList:[
                {   id:1,
                    setup:'sada',
                    punchline:'sda',
                },
                {   id:1,
                    setup:'123',
                    punchline:'345',
                },
            ],
        }
    }
    addNewCard = () => {
        this.setState(prevState => {
          const prevCardList = prevState.cardList;
          this.counter += 1;
          const card = {
            id: this.counter,
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          };
          return {
            cardList: prevCardList.concat(card),
          };
        });
      }
    render(){
        return(
            <div>
                {
                    this.state.cardList.map(card=>{
                        return(
                            <Card key={card.id}>
                                <div>Q:{card.setup}</div>
                                <div>
                                    <strong>A:{card.punchline}</strong>
                                </div>
                                </Card>
                                
                        )
                    })
                }<Button onClick={this.addNewCard}>
                                    ka
                                    </Button>
            </div>
        )
    }
}
