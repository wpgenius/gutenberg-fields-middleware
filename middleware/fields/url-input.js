/**
 * Url field.
 */

const { UrlInput } = wp.blocks;

const urlInput = ( props, attribute, attributeKey ) => {
	const defaultAttributes = {

		onChange( value ) {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		},

		value: props.attributes[ attributeKey ],
	};

	const fieldAttributes = _.extend( defaultAttributes, attribute.field );

	delete fieldAttributes.type;

	return (
		<UrlInput
			{ ...fieldAttributes }
		/>
	);
};

export default urlInput;