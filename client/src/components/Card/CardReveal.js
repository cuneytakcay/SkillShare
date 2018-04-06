import React from 'react';
import { Card, CardTitle } from 'react-materialize';

export const CardReveal = () => (
  <Card 
  	header={<CardTitle reveal image={"#"} waves='light' />}
    title="Card Title"
    reveal={<p>More info</p>}>
    <p><a href="#">Link</a></p>
	</Card>
);