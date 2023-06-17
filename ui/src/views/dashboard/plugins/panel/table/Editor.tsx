import { Alert, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Switch, Text, Textarea } from "@chakra-ui/react"
import PanelAccordion from "src/views/dashboard/edit-panel/Accordion"
import { EditorInputItem, EditorNumberItem } from "components/editor/EditorItem"
import PanelEditItem from "src/views/dashboard/edit-panel/PanelEditItem"
import {  PanelEditorProps } from "types/dashboard"

const TablePanelEditor = ({ panel, onChange }: PanelEditorProps) => {
    return (<PanelAccordion title="Table setting">
        <PanelEditItem title="Show header" desc="whether display table's header">
            <Switch isChecked={panel.plugins.table.showHeader} onChange={(e) => onChange(draft => {
                 draft.plugins.table.showHeader = e.target.checked
            })} />
        </PanelEditItem>

        <PanelEditItem title="Global search" desc="Enable search for this table, you can search everything">
            <Switch isChecked={panel.plugins.table.globalSearch} onChange={(e) => onChange(panel => {
                 panel.plugins.table.globalSearch = e.target.checked
            })} />
        </PanelEditItem>
        <PanelEditItem title="Pagination">
            <Switch isChecked={panel.plugins.table.enablePagination} onChange={(e) => onChange(panel => {
                panel.plugins.table.enablePagination = e.target.checked
            })} />
        </PanelEditItem>
        {panel.plugins.table.enablePagination && <PanelEditItem title="Page size" desc="set display count for each table page">
            <EditorNumberItem  value={panel.plugins.table.pageSize ?? 10} min={5} max={20} step={5} onChange={(v) => onChange(panel => {
                 panel.plugins.table.pageSize = v
            })}/>
        </PanelEditItem>}

        <PanelEditItem title="Column sort" desc="click the column title to sort it by asc or desc">
            <Switch isChecked={panel.plugins.table.enableSort} onChange={(e) =>  onChange(panel => {
                   panel.plugins.table.enableSort = e.target.checked
            })} />
        </PanelEditItem>

        <PanelEditItem title="Column filter" desc="filter the column values in table">
            <Switch isChecked={panel.plugins.table.enableFilter} onChange={(e) => onChange(panel => {
                 panel.plugins.table.enableFilter = e.target.checked
            })} />
        </PanelEditItem>

        <PanelEditItem title="On row click" desc="trigger your custom event when a row is clicked">
            <Alert status='success'>
                Here is a simple example:
                
            </Alert>
            <Text>function onRowClick(row, router, setVariable) &#123;</Text>
            <EditorInputItem type="textarea" value={panel.plugins.table.onRowClick} onChange={(v) => {
                onChange(panel => {
                  panel.plugins.table.onRowClick = v
            })}} />
             <Text>&#125; </Text>
        </PanelEditItem>
    </PanelAccordion>
    )
}

export default TablePanelEditor