import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
export function ResizableDemo() {
    return (
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-96 rounded-lg border"
      >
        <ResizablePanel defaultSize={50} minSize={20} maxSize={80}>
          <div className="flex h-[200px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50} >
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={25} minSize={25} maxSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Three</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
  }
  