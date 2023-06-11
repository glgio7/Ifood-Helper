import { IMarker } from "./protocols";

export class Marker implements IMarker {
	private props: IMarker;

	constructor(props: IMarker) {
		const requiredFields = ["icon", "position", "author", "comment"];

		for (const field of requiredFields) {
			if (
				!props[field as keyof IMarker] ||
				props[field as keyof IMarker] === ""
			) {
				throw new Error(`${field} cannot be empty!`);
			}
		}

		if (!props.position.lat || !props.position.lng) {
			throw new Error(`Position is invalid!`);
		}

		if (!props.icon.iconUrl || !props.icon.label) {
			throw new Error(`Icon is invalid!`);
		}

		this.props = props;
	}

	get icon() {
		return this.props.icon;
	}
	get position() {
		return this.props.position;
	}
	get author() {
		return this.props.author;
	}
	get comment() {
		return this.props.comment;
	}
}
