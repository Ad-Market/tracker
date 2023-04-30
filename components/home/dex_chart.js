import { Card, Grid } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import { useEffect } from "react"

export default function DexChart({ data }) {

    const { type } = useTheme();

    return(
        <Card shadow={true}>
            <Card.Body css={{ p: 0 }}>

            { data && 
                <iframe 
                    frameBorder={0}
                    width={"100%"}
                    height={750}
                    src={`https://www.dextools.io/app/en/bnb/${data && data.stats.pairAddress}?embed=1&theme=${type}&trades=0&info=0`}>
                </iframe>
            }
            </Card.Body>
        </Card>
    )
}
