export class ArgumentEntity {
    name: string;
    type: string;
    isRequired: boolean;
    description: string;
    example?: string;

    constructor(
        name: string,
        type: string,
        isRequired: boolean,
        description: string,
        example?: string
    ) {
        this.name = name;
        this.type = type;
        this.isRequired = isRequired;
        this.description = description;
        this.example = example;
    }

    static create(data: {
        name: string;
        type: string;
        isRequired: boolean;
        description: string;
        example?: string;
    }): ArgumentEntity {
        return new ArgumentEntity(
            data.name,
            data.type,
            data.isRequired,
            data.description,
            data.example
        );
    }
}

