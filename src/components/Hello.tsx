import * as React from 'react';
import { getImageUrl } from '../utils';
export interface Props {
    name: string;
    enthusiasmLevel?: number;
}
type AvatarProps = {
    size: {
        width: number;
        height: number
    };
    person: {
        name: string;
        imageId: string;
    }
}
const getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join('!');
}
const Avatar = (props: AvatarProps) => {
    const { size, person } = props;
    const imgRef = React.useRef<HTMLImageElement>(null);
    const handleClick = () => {
        console.log(imgRef.current?.src);
    }
    return (
        <img
            className="avatar"
            ref={imgRef}
            onClick={handleClick}
            src={getImageUrl(person)}
            alt={person.name}
            width={size.width}
            height={size.height}
        />
    );
}
const Card = (props: { children: JSX.Element }) => {
    const theme = React.useContext(ThemeContext);
    return (
        <div className={`card ${theme}`}>
            {props.children}
        </div>
    );
}
const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];
const List = () => {
    const theme = React.useContext(ThemeContext);
    const listItems = people.map((person, index) =>
        <li key={index}>{person}</li>
    );
    return <ul className={`${theme}`}>{listItems}</ul>;
}
const ThemeContext = React.createContext<string>('');
export default class Hello extends React.Component<Props, object> {
    render() {
        const { name, enthusiasmLevel = 1 } = this.props;
        const avatarProps = {
            size: { width: 270, height: 129 },
            person: { name: 'Lin Lanying', imageId: 'PCtm_d9c8750bed0b3c7d089fa7d55720d6cf' }
        };
        if (enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (
            <ThemeContext.Provider value="dark">
                <div className="hello">
                    <div className="greeting">Hello {name + getExclamationMarks(enthusiasmLevel)}</div>
                    <Card>
                        <Avatar {...avatarProps} />
                    </Card>
                    <List></List>
                </div>
            </ThemeContext.Provider>
        );
    }
};
