"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UploadCloud, DownloadCloud } from "lucide-react"

export default function DataPage() {
    return (
        <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Data Import / Export</h2>

            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Import Data</CardTitle>
                        <CardDescription>Import your timetable and assignments from a file.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                            Supported formats: ICS (for calendars) and CSV (for tasks).
                        </p>
                        <Button className="w-full">
                            <UploadCloud className="mr-2 h-4 w-4" />
                            Upload File
                        </Button>
                        <div className="text-center">
                            <p className="text-sm font-medium text-primary cursor-pointer hover:underline">One-click sync (for management accounts)</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Export Data</CardTitle>
                        <CardDescription>Export your schedule and tasks to use in other applications.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button className="w-full">
                            <DownloadCloud className="mr-2 h-4 w-4" />
                            Export as ICS
                        </Button>
                        <Button className="w-full" variant="secondary">
                            <DownloadCloud className="mr-2 h-4 w-4" />
                            Export as CSV
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
