// Copyright 2023 Datav.io Team
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Select } from "antd";
import ColorTag from "src/components/ColorTag";
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import React from "react";
const { Option } = Select;

interface Props {
    tags: string[]
    value: string[]
    onChange: any
    tagCount?: Object
    minWidth?: string
}

const TagsFilter = ({ value, tags, onChange,tagCount={},minWidth="260px" }: Props) => {
    const tagRender = (props: CustomTagProps) => {
        const { value, onClose } = props;
        return (
            <ColorTag
                name={value}
                onRemove={onClose}
                style={{ marginRight: 3 }}
            />
        );
    };

    return (
        <>
            <Select
                placeholder="filter by tags, result = tag1 & tag2"
                size="large"
                allowClear
                mode="multiple"
                style={{ width: 'fit-content', minWidth: minWidth}}
                defaultValue={value}
                tagRender={tagRender}
                onChange={onChange}
            >
                {
                    tags.sort().map(tag => {
                        return <Option value={tag} label={tag+ ` (${tagCount[tag]??0})`}>
                            <ColorTag name={tag} label={tag+ ` (${tagCount[tag]??0})`} />
                        </Option>
                    })
                }
            </Select>
        </>
    )
}

export default TagsFilter