import React from 'react';
import { Animated, PanResponder, Text, View } from 'react-native';
import Styles from './Animations.Styles';

export default class AnimationView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            scaleOnDrag: new Animated.Value(1),
            animations: (new Array(3)).fill(new Animated.Value(1)),
        };

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => true,
            onMoveShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            onPanResponderGrant: (evt, gestureState) => {
                this.state.pan.setOffset({
                    x: this.state.pan.x._value,
                    y: this.state.pan.y._value,
                });
                this.state.pan.setValue({ x: 0, y: 0 });

                Animated.spring(this.state.scaleOnDrag, { toValue: 1.3, friction: 3 }).start();
            },
            onPanResponderMove: Animated.event([
                null,
                { dx: this.state.pan.x, dy: this.state.pan.y }
            ]),
            onPanResponderRelease: (evt, gestureState) => {
                this.state.pan.flattenOffset();
                Animated.spring(this.state.scaleOnDrag, { toValue: 1, friction: 3 }).start();
            },
        });
    }

    componentDidMount() {
        const { animations } = this.state;
        animations.forEach(this.animateNode);
    }

    render() {
        const { animations, scaleOnDrag, pan } = this.state;
        const animatedViews = animations.map((value, idx) => {
            return (
                <View key={idx} style={Styles.innerContainer}>
                    <Animated.View style={[Styles.animated, { transform: [{ scaleX: value }] } ]}>
                        <Text style={Styles.text}>#{idx}</Text>
                    </Animated.View>
                </View>
            );
        });

        return (
            <View style={Styles.container}>
                <View style={Styles.draggingArea}>
                    <Animated.View 
                        style={[ Styles.draggable, { transform: [
                            { scale: scaleOnDrag },
                            { translateX: pan.x },
                            { translateY: pan.y },
                        ]} ]}
                        {...this._panResponder.panHandlers}
                    >
                    </Animated.View>
                </View>
                {animatedViews}
            </View>
        );
    };

    animateNode(value) {
        value.setValue(1);

        return Animated.loop(
            Animated.stagger(1000, [
                Animated.spring(value, { toValue: 3, useNativeDriver: true }),
                Animated.spring(value, { toValue: 1, useNativeDriver: true }),
            ])
        ).start();
    }
}
