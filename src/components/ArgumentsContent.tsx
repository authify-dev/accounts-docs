
interface ArgumentItemProps {
    name: string;
    type: string;
    isRequired: boolean;
    description: string;
    example?: string;
}

function ArgumentItem({ name, type, isRequired, description, example }: ArgumentItemProps) {
    return (
        <div className="border-t-3 border-gray-200 py-4">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    <code>{name}</code>
                    <span>·</span>
                    <code className="text-green-600">{type}</code>
                </div>
                {isRequired && (
                    <span className="text-pink-500 text-sm font-medium">Required</span>
                )}
            </div>
            <p className=" mb-2">{description}</p>
            {example && (
                <div className="mt-2">
                    <div className="text-sm mb-1">Example</div>
                    <div className="p-2 rounded">
                        <code className="text-sm">{example}</code>
                    </div>
                </div>
            )}
        </div>
    );
}

interface Argument {
    name: string;
    type: string;
    isRequired: boolean;
    description: string;
    example?: string;
}

interface ArgumentsContentProps {
    requiredArgs: Argument[];
    optionalArgs?: Argument[];
}

export default function ArgumentsContent({ requiredArgs, optionalArgs }: ArgumentsContentProps) {
    return (
        <div className="text-left" style={{padding: "20px"}}>
            <div>
                <h4 className="text-pink-500 font-semibold">Required arguments</h4>
                {requiredArgs && requiredArgs.length > 0 ? (
                    requiredArgs.map((arg, index) => (
                        <ArgumentItem key={index} {...arg} />
                    ))
                ) : (
                    <p className="text-gray-500">No required arguments available.</p>
                )}
            </div>

            {optionalArgs && optionalArgs.length > 0 ? (
                <div>
                    <h4 className="text-pink-500 font-medium mb-4">Optional arguments</h4>
                    {optionalArgs.map((arg, index) => (
                        <ArgumentItem key={index} {...arg} />
                    ))}
                </div>
            ) : (
                optionalArgs !== undefined && (
                    <p className="text-gray-500">No optional arguments available.</p>
                )
            )}
        </div>
    );
}
