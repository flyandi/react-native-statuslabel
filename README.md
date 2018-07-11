# react-native-statuslabel

A simple status label control.

![alt text](https://github.com/flyandi/react-native-optiongroup/raw/master/docs/default.png "react-native-optiongroup")


## Installation

**React Native >= 0.49**

```bash
yarn add react-native-statuslabel
```

## Attributes

| Prop | Description | Default |
|---|---|---|
|`string` **`backgroundColor`**|Specifies the background color of the component|`transparent`|
|`string` **`borderColor`**|Specifies the border color of the component|`#828186`|
|`number` **`borderWidth`**|Specifies the border width of the component|`1`|
|`number` **`borderRadius`**|Specifies the border radius of the component|`3`|
|`number` **`contentPadding`**|The text inside the box|`5`
|`string` **`textColor`**|The text color|`#ffffff`|
|`string` **`fontFamily`**|The font family|`undefined`|
|`string` **`fontSize`**|The font size|`undefined`|
|`string` **`label`**|The text of the label|`required`|
|`object` **`style`**|A standard style object, refer below for more information|`undefined`|
|`string` **`theme`**|One of the following theme strings: `red`, `yellow`, `blue` or `green`|`undefined`|

## Events

| Prop | Description |
|---|---|
|**`onPress`**|Executed when the user touches the status label|

## Constants

| Prop | Description |
|---|---|
|**`onPress`**|Executed when the user touches the status label|


## Examples

Import the component:

```es6
import StatusLabel, {Statuses} from 'react-native-statuslabel';
```


**Simple Options**

```es6
<StatusLabel
    type={Statuses.IN_PROGRESS}
/>
```

**Theme Styles**

![alt text](https://github.com/flyandi/react-native-optiongroup/raw/master/docs/themes.png "react-native-optiongroup")


```es6
<StatusLabel
	theme={'red'}
	label={'Red Label'}
    onPress={() => console.log('pressed')}
/>

<StatusLabel
	theme={'blue'}
	label={'Blue Label'}
    onPress={() => console.log('pressed')}
/>

<StatusLabel
	theme={'yellow'}
	label={'Yellow Label'}
    onPress={() => console.log('pressed')}
/>

<StatusLabel
	theme={'green'}
	label={'Green Label'}
    onPress={() => console.log('pressed')}
/>
```



