export type Command = {
	name: string;
	handler: () => Promise<void> | void;
};
