import { IMarker } from "./protocols";

export class Marker implements IMarker {
	private props: IMarker;

	constructor(props: IMarker) {
		const requiredFields = [
			"icon",
			"position",
			"author",
			"comment",
			"createdAt",
		];

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
	get votes() {
		return this.props.votes;
	}
	get upvoters() {
		return this.props.upvoters;
	}
	get downvoters() {
		return this.props.downvoters;
	}
	get position() {
		return this.props.position;
	}
	get createdAt() {
		return this.props.createdAt;
	}
	get author() {
		return this.props.author;
	}
	get comment() {
		return this.props.comment;
	}
}
