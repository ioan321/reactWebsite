import React, {Component} from 'react';
import '../style/css/ClientDescription.css';

class ClientDescription extends Component {
    
    render(){
        return(
            <div className="client-description">
                <p> 
                    {this.props.file}
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non elit lorem. Fusce vitae magna sodales, iaculis leo eu, rutrum ante. Phasellus mollis nisi nec convallis consequat. Quisque sit amet vehicula magna. Morbi hendrerit cursus lectus, rhoncus gravida nisl ullamcorper a. Proin egestas, turpis quis scelerisque malesuada, quam metus finibus nunc, vel commodo ante velit ac neque. Morbi ultricies id magna eu tincidunt. Fusce blandit at nunc ut tincidunt. Cras vitae iaculis erat. Etiam sit amet tincidunt sapien.
                    Etiam nisl massa, sagittis nec orci vel, gravida sagittis odio. Mauris et aliquam magna. Nullam iaculis, enim quis pulvinar volutpat, sem nunc ornare nunc, ut fringilla nisl tellus vel tortor. Vestibulum fringilla sed mauris eget facilisis. Duis posuere ligula urna, scelerisque dignissim dolor cursus nec. Cras feugiat tellus eget augue sodales mollis. Phasellus quis dignissim dolor, eget porta elit. Vivamus aliquam ac magna a facilisis. Sed eleifend sem quis porta sollicitudin. Pellentesque ut malesuada metus.
                    Integer nec vehicula risus, ut tincidunt dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus eleifend rutrum quam. Nam lobortis orci eget lobortis commodo. Suspendisse vehicula vitae odio ut aliquam. Curabitur ut orci finibus, tincidunt magna quis, iaculis urna. Ut porta nunc massa, sit amet dictum libero congue vel. Vestibulum gravida turpis eget erat venenatis aliquam. Maecenas non feugiat metus. Duis ante justo, venenatis a nunc a, ullamcorper lobortis velit. Duis a urna nec elit porta commodo et at arcu. Fusce malesuada est et est aliquam, in sagittis augue congue. Suspendisse placerat accumsan sodales. Vivamus consectetur a quam ut porta. Curabitur in consectetur metus.
                </p> 
            </div>
        );  
    }  
}  

export default ClientDescription;