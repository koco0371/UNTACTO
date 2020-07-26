#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "secdialog.h"
#include "votewindow.h"

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);

}

MainWindow::~MainWindow()
{
    delete ui;
}


void MainWindow::startVote()
{
    SecDialog secDialog;
    secDialog.setModal(true);
    secDialog.exec();
}

void MainWindow::getReward()
{
    myNewWindow = new VoteWindow();
    myNewWindow->showFullScreen();
}

VideoWidget::VideoWidget(QWidget *parent)
    : QWidget(parent)

{
    myMediaPlayer = new QMediaPlayer(this, QMediaPlayer::VideoSurface);


}

VideoWidget::~VideoWidget()
{}

