import { HStack, Select, Text } from "@chakra-ui/react"
import { Variable } from "types/variable"
import storage from "utils/localStorage"

interface Props {
    variables: Variable[]
    onChange: any
}

const vkey = "apm-variables"
const SelectVariables = ({ variables, onChange }: Props) => {
    return (<HStack>
        {variables.map(v => {
            return <HStack>
                <Text fontSize="sm" minWidth="fit-content">{v.name}</Text>
                <Select value={v.selected} size="sm" onChange={e => setVariableValue(v, e.currentTarget.value, onChange)}>
                    {
                        v.values.map(v => <option value={v}>{v}</option>)
                    }
                </Select>
            </HStack>
        })}
    </HStack>)
}

export default SelectVariables

export const setVariableSelected = (variables: Variable[]) => {
    let sv = storage.get(vkey)
    if (!sv) {
        sv = {}
    }

    for (const v of variables) {
        const selected = sv[v.id]
        if (!selected) {
            v.selected = v.values[0]
        } else {
            v.selected = selected
        }
    }
}


export const setVariableValue = (variable: Variable, value, onChange) => {
    let exist = false;
    for (var i = 0; i < variable.values.length; i++) {
        if (variable.values[i] == value) {
            exist = true
            break
        }
    }

    if (!exist) {
        return `value ${value} not exist in variable ${variable.name}`
    }
    
    variable.selected = value
    const sv = storage.get(vkey)
    if (!sv) {
        storage.set(vkey, {
            [variable.id]: value
        })
    } else {
        sv[variable.id] = value
        storage.set(vkey, sv)
    }

    onChange()
}