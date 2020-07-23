#ifndef VOTEWINDOW_H
#define VOTEWINDOW_H

#include <QMainWindow>

namespace Ui {
class VoteWindow;
}

class VoteWindow : public QMainWindow
{
    Q_OBJECT

public:
    explicit VoteWindow(QWidget *parent = nullptr);
    ~VoteWindow();


private slots:
    void pushCloseButton();

private:
    Ui::VoteWindow *ui;
};

#endif // VOTEWINDOW_H
