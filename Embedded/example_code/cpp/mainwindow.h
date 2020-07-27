#ifndef MAINWINDOW_H
#define MAINWINDOW_H

#include <QWidget>
#include <QMainWindow>
#include <QVideoWidget>
#include <QMediaPlayer>
#include <QPushButton>

#include "votewindow.h"

QT_BEGIN_NAMESPACE
namespace Ui {
    class MainWindow;
    class VoteWindow;

}
QT_END_NAMESPACE

class MainWindow : public QMainWindow
{
    Q_OBJECT

public:
    MainWindow(QWidget *parent = nullptr);
    ~MainWindow();

private slots:
    void startVote();
    void getReward();

private:
    Ui::MainWindow *ui;

private:
    VoteWindow *myNewWindow;
};




class VideoWidget : public QWidget
{
    Q_OBJECT

public:
    VideoWidget(QWidget *parent = nullptr);
    ~VideoWidget();


private slots:


private:
    QMediaPlayer *myMediaPlayer;


};


#endif // MAINWINDOW_H
