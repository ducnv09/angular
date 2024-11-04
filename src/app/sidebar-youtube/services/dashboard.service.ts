import { computed, effect, Injectable, signal } from "@angular/core";
import { SubscribersComponent } from "../pages/dashboard/widgets/subscribers/subscribers.component";
import { Widget } from "../models/dashboard";
import { ViewsComponent } from "../pages/dashboard/widgets/views/views.component";
import { WatchTimeComponent } from "../pages/dashboard/widgets/watch-time/watch-time.component";
import { RevenueComponent } from "../pages/dashboard/widgets/revenue/revenue.component";
import { AnalyticsComponent } from "../pages/dashboard/widgets/analytics/analytics.component";
import { SourcesComponent } from "../pages/dashboard/widgets/sources/sources.component";

@Injectable()
export class DashboardService {

    widgets = signal<Widget[]>([
        {
            id: 1,
            label: 'Subscribers',
            content: SubscribersComponent,
            columns: 1,
            rows: 1,
            backgroundColor: '#003f5c',
            color: 'whitesmoke'
        },
        {
            id: 2,
            label: 'Views',
            content: ViewsComponent,
            columns: 1,
            rows: 1,
            backgroundColor: '#003f5c',
            color: 'whitesmoke'
        },
        {
            id: 3,
            label: 'Watch Time',
            content: WatchTimeComponent,
            columns: 1,
            rows: 1,
            backgroundColor: '#003f5c',
            color: 'whitesmoke'
        },
        {
            id: 4,
            label: 'Revenue',
            content: RevenueComponent,
            columns: 2,
            rows: 1,
            backgroundColor: '#003f5c',
            color: 'whitesmoke'
        },
        {
            id: 5,
            label: 'Channel Analytics',
            content: AnalyticsComponent,
            columns: 3,
            rows: 2,
        },
        {
            id: 6,
            label: 'Traffic sources',
            content: SourcesComponent,
            columns: 2,
            rows: 2,
        },
    ]);

    // chứa những widget thêm sau
    addedWidgets = signal<Widget[]>([
        // {
        //     id: 1,
        //     label: 'Subscribers',
        //     content: SubscribersComponent,
        //     columns: 1,
        //     rows: 1,
        //     backgroundColor: '#003f5c',
        //     color: 'whitesmoke'
        // },
        // {
        //     id: 2,
        //     label: 'Views',
        //     content: ViewsComponent,
        //     columns: 1,
        //     rows: 1,
        //     backgroundColor: '#003f5c',
        //     color: 'whitesmoke'
        // },
        // {
        //     id: 3,
        //     label: 'Watch Time',
        //     content: WatchTimeComponent,
        //     columns: 1,
        //     rows: 1,
        //     backgroundColor: '#003f5c',
        //     color: 'whitesmoke'
        // },
        // {
        //     id: 4,
        //     label: 'Revenue',
        //     content: RevenueComponent,
        //     columns: 1,
        //     rows: 1,
        //     backgroundColor: '#003f5c',
        //     color: 'whitesmoke'
        // },
    ]);

    // tìm những widget nào chưa có thì hiện ra
    widgetsToAdd = computed(() => {
        const addedIds = this.addedWidgets().map(w => w.id);
        return this.widgets().filter((w) => !addedIds.includes(w.id));
    });

    // thêm mới widget
    addWidget(w: Widget) {
        this.addedWidgets.set([...this.addedWidgets(), {...w}]);
    }

    // cập nhật mới các widget nếu có thay đổi span
    updateWidget(id: number, widget: Partial<Widget>) {
        const index = this.addedWidgets().findIndex(w => w.id === id);
        if (index !== -1) {
            const newWidgets = [...this.addedWidgets()];
            newWidgets[index] = {...newWidgets[index], ...widget};
            this.addedWidgets.set(newWidgets); 
        }
    }

    // đổi vị trí
    updateWidgetPosition(sourceWidgetId: number, targetWidgetId: number) {
        const sourceIndex = this.addedWidgets().findIndex((w) => w.id === sourceWidgetId);

        if (sourceIndex === -1) {
            return;
        }

        const newWidgets = [...this.addedWidgets()];
        const sourceWidget = newWidgets.splice(sourceIndex, 1)[0];

        const targetIndex = newWidgets.findIndex((w) => w.id === targetWidgetId);
        if (targetIndex === -1) {
            return;
        }

        console.log('targetIndex', targetIndex);
        console.log('sourceIndex', sourceIndex);

        // const insertAt = targetIndex === sourceIndex ? targetIndex + 1 : targetIndex;

        // di chuyển về trước => targetIndex < sourceIndex => lấy targetIndex
        // di chuyển về sau => targetIndex >= sourceIndex => lấy targetIndex + 1
        const insertAt = targetIndex < sourceIndex ? targetIndex : targetIndex + 1;
        
        // chèn vào vị trí với
        newWidgets.splice(insertAt, 0, sourceWidget);

        this.addedWidgets.set(newWidgets);
    }

    // qua phải
    moveWidgetToRight(id: number) {
        const index = this.addedWidgets().findIndex(w => w.id === id);
        if (index === this.addedWidgets().length - 1) {
            return;
        }

        const newWidgets = [...this.addedWidgets()];
        [newWidgets[index], newWidgets[index + 1]] = [{...newWidgets[index + 1]}, {...newWidgets[index]}];

        this.addedWidgets.set(newWidgets);
    }

    //qua trái
    moveWidgetToLeft(id: number) {
        const index = this.addedWidgets().findIndex(w => w.id === id);
        if (index === 0) {
            return;
        }

        const newWidgets = [...this.addedWidgets()];
        [newWidgets[index], newWidgets[index - 1]] = [{...newWidgets[index - 1]}, {...newWidgets[index]}];

        this.addedWidgets.set(newWidgets);
    }

    // xóa widget
    removeWidget(id: number) {
        this.addedWidgets.set(this.addedWidgets().filter(w => w.id !== id));
    }

    constructor() {
        this.fetchWidgets();
    }

    //lưu widget vào storage để load lại trang ko mất dữ liệu
    saveWidgets = effect(() => {
        const widgetsWithoutContent: Partial<Widget>[] = this.addedWidgets().map(w => ({ ...w }));
        widgetsWithoutContent.forEach(w => {
            delete w.content;
        });

        localStorage.setItem('dashboardWidgets', JSON.stringify(widgetsWithoutContent));
    });

    //load widget
    fetchWidgets() {
        const widgetsAsString = localStorage.getItem('dashboardWidgets');
        if (widgetsAsString) {
            const widgetsParse = JSON.parse(widgetsAsString) as Widget[];
            widgetsParse.forEach(widget => {
                const content = this.widgets().find(w => w.id === widget.id)?.content;
                if (content) {
                    widget.content = content;
                }
            });

            // gán giá trị cho widgets
            this.addedWidgets.set(widgetsParse);
        }
    }

    //thêm vào dashboard từ widget
    insertWidgetAtPosition(sourceWidgetId: number, destWidgetId: number) {
        const widgetToAdd = this.widgetsToAdd().find((w) => w.id === sourceWidgetId);
        if (!widgetToAdd) {
            return;
        }

        console.log('dsf', 'sđsf');

        const indexOfDestWidget = this.addedWidgets().findIndex(w => w.id === destWidgetId);
        const positionToAdd = indexOfDestWidget === -1 ? this.addedWidgets().length : indexOfDestWidget;

        const newWidgets = [...this.addedWidgets()];
        newWidgets.splice(positionToAdd, 0, widgetToAdd);
        this.addedWidgets.set(newWidgets);
    }
}