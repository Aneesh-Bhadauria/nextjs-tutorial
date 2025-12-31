"use client"
import {ScrollArea} from "@/components/ui/scroll-area";
import {Card} from "@/components/ui/card";
import {Checkbox} from "@/components/ui/checkbox";
import {Calendar} from "@/components/ui/calendar";
import  {useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import {Button} from "@/components/ui/button";

const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open , setOpen] = useState<boolean>(false);
    return (
      <div className={""}>
          <h1 className={"text-lg font-medium mb-6"}>Todo List</h1>
          <Popover open = {open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                  <Button className={"w-full"} onClick={() => setOpen(true)}>
                      <CalendarIcon/>
                      {date ? format(date , "PPP") : <span>Pick a date</span>}
                  </Button>
              </PopoverTrigger>
              <PopoverContent>
                  <Calendar
                      mode="single"
                      selected = {date}
                      onSelect = {(date) =>{
                          setDate(date)
                          setOpen(false)
                      }}
                      className={"rounded-md border"}
                  />
              </PopoverContent>
          </Popover>

          <ScrollArea className={"max-h-[400px] mt-4 overflow-y-auto"}>
              <div>
            <Card className={"p-4"}>
            <div className={"flex items-center gap-4"}>
                <Checkbox id = "item1"/>
                <label htmlFor ="item1" className={"text-sm text-muted-foreground"}>Item 1</label>
            </div>
            </Card>
              <Card className={"p-4"}>
            <div className={"flex items-center gap-4"}>
                <Checkbox id = "item1"/>
                <label htmlFor ="item1" className={"text-sm text-muted-foreground"}>Item 1</label>
            </div>
            </Card>
              <Card className={"p-4"}>
            <div className={"flex items-center gap-4"}>
                <Checkbox id = "item1"/>
                <label htmlFor ="item1" className={"text-sm text-muted-foreground"}>Item 1</label>
            </div>
            </Card>
            <Card className={"p-4"}>
            <div className={"flex items-center gap-4"}>
                <Checkbox id = "item1"/>
                <label htmlFor ="item1" className={"text-sm text-muted-foreground"}>Item 1</label>
            </div>
            </Card>
              <Card className={"p-4"}>
            <div className={"flex items-center gap-4"}>
                <Checkbox id = "item1"/>
                <label htmlFor ="item1" className={"text-sm text-muted-foreground"}>Item 1</label>
            </div>
            </Card>
              <Card className={"p-4"}>
            <div className={"flex items-center gap-4"}>
                <Checkbox id = "item1"/>
                <label htmlFor ="item1" className={"text-sm text-muted-foreground"}>Item 1</label>
            </div>
            </Card>
              <Card className={"p-4"}>
            <div className={"flex items-center gap-4"}>
                <Checkbox id = "item1"/>
                <label htmlFor ="item1" className={"text-sm text-muted-foreground"}>Item 1</label>
            </div>
            </Card>
              <Card className={"p-4"}>
            <div className={"flex items-center gap-4"}>
                <Checkbox id = "item1"/>
                <label htmlFor ="item1" className={"text-sm text-muted-foreground"}>Item 1</label>
            </div>
            </Card>
              <Card className={"p-4"}>
            <div className={"flex items-center gap-4"}>
                <Checkbox id = "item1"/>
                <label htmlFor ="item1" className={"text-sm text-muted-foreground"}>Item 1</label>
            </div>
            </Card>
              <Card className={"p-4"}>
            <div className={"flex items-center gap-4"}>
                <Checkbox id = "item1"/>
                <label htmlFor ="item1" className={"text-sm text-muted-foreground"}>Item 1</label>
            </div>
            </Card>
              <Card className={"p-4"}>
            <div className={"flex items-center gap-4"}>
                <Checkbox id = "item1"/>
                <label htmlFor ="item1" className={"text-sm text-muted-foreground"}>Item 1</label>
            </div>
            </Card>
              <Card className={"p-4"}>
            <div className={"flex items-center gap-4"}>
                <Checkbox id = "item1"/>
                <label htmlFor ="item1" className={"text-sm text-muted-foreground"}>Item 1</label>
            </div>
            </Card>
              <Card className={"p-4"}>
            <div className={"flex items-center gap-4"}>
                <Checkbox id = "item1"/>
                <label htmlFor ="item1" className={"text-sm text-muted-foreground"}>Item 1</label>
            </div>
            </Card>
              </div>
          </ScrollArea>
      </div>
    )
}

export default TodoList;