"use client"

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"

export default function NotificationsPage() {
    return (
        <div className="flex-1 space-y-6 p-4 md:p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Notification Settings</h2>

            <Card>
                <CardHeader>
                    <CardTitle>Master Control</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center space-x-4">
                        <Switch id="master-toggle" defaultChecked />
                        <Label htmlFor="master-toggle">Enable All Notifications</Label>
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Notification Types</CardTitle>
                    <CardDescription>Toggle reminders for different activities.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <NotificationToggle id="class-reminders" label="Class Reminders" defaultChecked />
                    <NotificationToggle id="assignment-deadlines" label="Assignment Deadline Alerts" defaultChecked />
                    <NotificationToggle id="exam-alerts" label="Exam Preparation Alerts" defaultChecked />
                    <NotificationToggle id="project-activity" label="Project/Team Activity Alerts" />
                    <NotificationToggle id="study-goals" label="Personal Study Goals Alerts" />
                    <NotificationToggle id="focus-timer" label="Focus Timer Alerts" defaultChecked />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Smart Timing Options</CardTitle>
                     <CardDescription>Choose when you want to be reminded.</CardDescription>
                </CardHeader>
                <CardContent>
                    <RadioGroup defaultValue="10min">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="now" id="r1" />
                                <Label htmlFor="r1">At the moment</Label>
                            </div>
                             <div className="flex items-center space-x-2">
                                <RadioGroupItem value="10min" id="r2" />
                                <Label htmlFor="r2">10 min before</Label>
                            </div>
                             <div className="flex items-center space-x-2">
                                <RadioGroupItem value="30min" id="r3" />
                                <Label htmlFor="r3">30 min before</Label>
                            </div>
                             <div className="flex items-center space-x-2">
                                <RadioGroupItem value="1hour" id="r4" />
                                <Label htmlFor="r4">1 hour before</Label>
                            </div>
                             <div className="flex items-center space-x-2">
                                <RadioGroupItem value="1day" id="r5" />
                                <Label htmlFor="r5">1 day before</Label>
                            </div>
                        </div>
                    </RadioGroup>
                    <div className="mt-4 flex gap-2 sm:w-1/2">
                        <Input type="text" placeholder="Custom reminder..." />
                        <Button>Set</Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Delivery Channels</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <NotificationToggle id="push-notifications" label="Push Notifications" defaultChecked />
                    <NotificationToggle id="email-alerts" label="Email Alerts" />
                    <NotificationToggle id="in-app-popups" label="In-App Pop-ups" defaultChecked />
                </CardContent>
            </Card>
            
            <div className="flex justify-end">
                <Button>Save Changes</Button>
            </div>
        </div>
    )
}

function NotificationToggle({ id, label, defaultChecked = false }: { id: string, label: string, defaultChecked?: boolean }) {
    return (
        <div className="flex items-center justify-between">
            <Label htmlFor={id}>{label}</Label>
            <Switch id={id} defaultChecked={defaultChecked} />
        </div>
    )
}
