export enum Elements {
    Air,
    Water,
    Earth,
    Fire,
}

type TokenProps = {
    element: Elements
}

export function ElementalToken(props: TokenProps){
    return(
        <div className="token">
            <img src={"elements/" + Elements[props.element] + ".png"} alt="" className="token-img" />
        </div>
    );
}